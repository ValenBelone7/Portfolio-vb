// Se ejecuta antes del primer pintado para evitar el parpadeo de tema.
// Prioridad: elección guardada del usuario > preferencia del sistema.
// También marca data-js: las animaciones de aparición solo ocultan contenido si hay JS.
const script = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}document.documentElement.setAttribute("data-js","")})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
