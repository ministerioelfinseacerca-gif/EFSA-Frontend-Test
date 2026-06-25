# Estilo Fusión Editorial
Cuando el usuario solicite aplicar el "estilo fusión editorial" a un bloque de texto o título, se debe aplicar la siguiente estructura tipográfica masiva que mezcla fuentes Sans-Serif gruesas con Serif itálicas elegantes en múltiples líneas:

1. El contenedor del título debe tener clases similares a: `font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6`.
2. La primera parte del texto debe estar directamente en el contenedor (texto Sans-Serif grueso).
3. Debe haber un salto de línea `<br />` (con clases responsivas como `className="hidden md:block"` si aplica).
4. La segunda parte del texto debe estar dentro de un `span` con las clases: `font-headline italic text-sky-800 font-normal tracking-tight`. Esta es la parte Serif elegante, en color celeste oscuro, con un punto al final.

**Ejemplo de código:**
```tsx
<h3 className="font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
  Palabra Principal <br className="hidden md:block" />
  <span className="font-headline italic text-sky-800 font-normal tracking-tight">y el resto de la frase.</span>
</h3>
```

# Estilo Montserrat
Cuando el usuario solicite aplicar el "estilo Montserrat" a una sección o bloque, se debe implementar una estructura de alto contraste utilizando únicamente la familia tipográfica Montserrat en sus pesos extremos (Black y Light). Se asume que la variable `--font-montserrat` ya está inyectada en el proyecto.

Reglas de aplicación:
1. El contenedor principal de la sección debe llevar la clase: `font-[family-name:var(--font-montserrat)]`.
2. Para **Títulos, subtítulos y elementos resaltados**, se debe usar la versión ultra gruesa: `font-black`. (Ejemplo: `className="font-black text-5xl text-navy-midnight uppercase"`).
3. Para **Textos de lectura, párrafos, listas y frases secundarias**, se debe usar la versión ultra delgada: `font-light`. (Ejemplo: `className="font-light text-base text-navy-midnight/85"`).
4. Si se mezcla con el estilo de titular de dos líneas (estilo "Fusión Editorial"), la primera línea es `font-black` y la segunda línea es `font-light italic`.

**Ejemplo de código:**
```tsx
<section className="font-[family-name:var(--font-montserrat)]">
  <h2 className="font-black text-5xl text-navy-midnight uppercase">Título Principal</h2>
  <p className="font-light text-lg text-navy-midnight/85">
    Párrafo de lectura con tipografía muy limpia y delgada, pero con <strong className="font-black text-gold-base">palabras clave en black</strong>.
  </p>
</section>
```

# Estilo Tarjeta Fusión
Cuando el usuario solicite aplicar la "Tarjeta Fusión" o el "Estilo Tarjeta Fusión" a una tarjeta de perfil (ej. un pastor, líder o invitado), se debe aplicar la siguiente combinación de estilos enfocada en elegancia y alta legibilidad:

1. **Avatar/Fotografía:** La imagen debe ser perfectamente circular en todos los tamaños (`rounded-full`), eliminando bordes cuadrados, y tener un borde sólido dorado (`border-4 border-gold-base shadow-lg`).
2. **Titular del Perfil:** Se debe aplicar la regla de "Fusión Editorial" combinada con "Montserrat" al nombre. La primera línea (el cargo, ej. "Pastor") en `font-black`, y la segunda línea (el nombre) en `font-light italic text-sky-800`.
3. **Botonera de Acción:** Los botones deben abandonar fondos transparentes confusos. Deben usar estilos "outline" con bordes sólidos (`border-2`), colores de texto oscuros/dorados legibles y un padding cómodo (`px-6 py-2.5`). En el estado hover, deben rellenarse del color del borde para un alto contraste (`hover:bg-[color] hover:text-white`).

**Ejemplo de código:**
```tsx
<div className="flex flex-col items-center">
  <div className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-gold-base shadow-lg overflow-hidden rounded-full">
    {/* Imagen */}
  </div>
  <h3 className="font-black text-3xl sm:text-4xl text-navy-midnight leading-[1.05] tracking-tighter mb-1">
    Pastor <br className="hidden sm:block" />
    <span className="font-light italic text-sky-800 tracking-tight">Marcos Morales.</span>
  </h3>
  <div className="flex gap-4">
    <a className="border-2 border-navy-midnight/10 text-navy-midnight font-black text-xs uppercase px-6 py-2.5 rounded-full hover:border-navy-midnight hover:bg-navy-midnight hover:text-white transition-all">
      Leer Biografía
    </a>
  </div>
</div>
```
