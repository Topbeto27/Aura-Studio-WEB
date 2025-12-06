import { promises as fs } from 'fs';
import path from 'path';

export async function getImagePaths(folderName: string): Promise<string[]> {
  const publicDir = path.join(process.cwd(), 'public');
  const fotosPortafolioDir = path.join(publicDir, 'fotos_portafolio');
  const targetDir = path.join(fotosPortafolioDir, folderName);

  try {
    const fileNames = await fs.readdir(targetDir);
    const imageExtensions = ['.webp'];

    const imagePaths = fileNames
      .filter((name) => imageExtensions.includes(path.extname(name).toLowerCase()))
      .map((name) => `/fotos_portafolio/${folderName}/${name}`);

    return imagePaths;
  } catch (error) {
    console.error(`Error reading image directory ${targetDir}:`, error);
    return [];
  }
}
