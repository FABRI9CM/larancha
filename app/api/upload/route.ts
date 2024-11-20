import { IncomingForm } from 'formidable';
import path from 'path';

export async function POST(req: Request) {
  const form = new IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/public/uploads');
  form.keepExtensions = true;

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error al cargar el archivo:', err);
        return resolve(new Response(JSON.stringify({ error: 'Error al cargar el archivo' }), { status: 500 }));
      }

      // Aquí puedes devolver los datos que quieras como JSON
      console.log('Campos:', fields);
      console.log('Archivos:', files);

      return resolve(new Response(JSON.stringify({ message: 'Archivo cargado exitosamente' }), { status: 200 }));
    });
  });
}
