# 📹 CÓMO AGREGAR EL VIDEO DE FONDO AL HERO SECTION

## ✅ Estado Actual

Tu sitio YUNGAS MTB SALTA 2 está **COMPLETAMENTE CONFIGURADO** para mostrar un video de fondo con filtro sepia de un rider de MTB. 

Actualmente muestra un **gradiente de colores tierra** (marrón, sienna, oliva) que se ve profesional mientras agregas el video.

---

## 🎬 Opción 1: Descargar desde Pexels (RECOMENDADA - 2 minutos)

1. **Abrí Pexels:**
   - Visitá: https://www.pexels.com/search/videos/mountain%20biking/

2. **Elegí un video:**
   - Buscá uno donde se vea un rider bajando por sendero de montaña
   - Que sea horizontal (apaisado)
   - Duración: 15-60 segundos
   - Calidad: 720p o 1080p

3. **Descargalo:**
   - Clic en el video
   - Clic en el botón "Free Download" (verde)
   - Elegí la calidad (720p está bien)

4. **Guardá el archivo:**
   - Mové el archivo descargado a:
   ```
   C:\Users\leoca\YUNGAS MTB SALTA 2\assets\mtb-rider-video.mp4
   ```

5. **Recargá el sitio:**
   - Abrí el navegador
   - Seguí en: `file:///C:/Users/leoca/YUNGAS%20MTB%20SALTA%202/index.html`
   - Presioná F5 para recargar
   - ¡Listo! El video se reproducirá con filtro sepia automáticamente

---

## 🎥 Opción 2: Usar tu propio video (si tenés uno)

Si tenés un video de MTB grabado con tu celular o cámara:

1. **Transferí el video a la computadora**

2. **Convertilo a MP4 si es necesario:**
   - Formato ideal: MP4 (codec H.264)
   - Resolución: 1920x1080 o 1280x720
   - Duración: 15-60 segundos

3. **Guardalo como:**
   ```
   C:\Users\leoca\YUNGAS MTB SALTA 2\assets\mtb-rider-video.mp4
   ```

4. **Recargá el sitio web**

---

## 🎨 ¿Qué va a pasar cuando agregues el video?

Automáticamente se aplicarán estos efectos:

✅ **Filtro Sépia (60%)**: Tonos cálidos vintage/marrones
✅ **Contraste aumentado (10%)**: Más impacto visual  
✅ **Brillo reducido (15%)**: Para que el texto sea legible
✅ **Overlay adicional**: Capa extra de calidez marrón-dorada
✅ **Loop continuo**: Se reproduce infinitamente sin cortes
✅ **Silenciado**: Sin audio (requerido para autoplay)
✅ **Responsive**: Se adapta a todos los tamaños de pantalla

---

## 📁 Estructura de Archivos

```
C:\Users\leoca\YUNGAS MTB SALTA 2\
├── index.html          ← Tu página principal
├── styles.css          ← Estilos con filtros sepia configurados
├── script.js           ← Animaciones y partículas
├── config.js           ← Configuraciones
└── assets\
    ├── mtb-rider-video.mp4  ← ¡ACÁ VA TU VIDEO!
    ├── logo-yungas-circular.png
    ├── logo-yungas-final.png
    └── tire-tracks.svg
```

---

## 🔧 Verificación

Después de agregar el video, verificá que:

- [ ] El video se reproduce automáticamente
- [ ] Tiene tonos sepia/marrón (no colores originales)
- [ ] El texto "DESCUBRE LA AVENTURA EN DOS RUEDAS" es legible
- [ ] Las partículas doradas flotan sobre el video
- [ ] El logo circular aparece más abajo
- [ ] No hay audio (debe estar silenciado)

---

## 💡 Tips para Elegir el Video Ideal

**✅ SÍ:**
- Rider bajando por sendero de montaña
- Toma amplia que muestre el paisaje
- Movimiento fluido y continuo
- Buena iluminación (día, atardecer)
- Duración corta (15-60 segundos para loop)

**❌ NO:**
- Videos muy oscuros o nocturnos
- Mucha acción rápida (puede marear)
- Primeros planos extremos
- Videos verticales (deben ser horizontales)
- Duración muy larga (+2 minutos)

---

## 🌟 Videos Sugeridos en Pexels

Buscá estos términos en Pexels para obtener resultados similares a lo que querés:

- "mountain biking downhill"
- "MTB POV trail"
- "cyclist mountain descent"
- "enduro biking"

Cualquiera de estos te va a dar un video épico que combina perfecto con tu marca YUNGAS MTB.

---

## 🆘 Problemas Comunes

**El video no se reproduce:**
- Verificá que el archivo se llame exactamente `mtb-rider-video.mp4`
- Verificá que esté en la carpeta `assets`
- Recargá la página con F5

**El video se ve sin filtro sepia:**
- Limpiá el caché del navegador (Ctrl + F5)
- Verificá que el CSS se cargó correctamente

**El video corta el texto:**
- El overlay ya está configurado para oscurecer el video
- Podés ajustar la opacidad en `styles.css` línea ~290

---

## 📞 ¿Necesitás Ayuda?

Si tenés problemas para agregar el video:

1. Revisá que el nombre del archivo sea exacto: `mtb-rider-video.mp4`
2. Verificá la ruta completa: `C:\Users\leoca\YUNGAS MTB SALTA 2\assets\`
3. Recargá la página completamente (Ctrl + F5)

¡El sitio ya está configurado! Solo falta que agregues el archivo de video y todo funcionará automáticamente con los filtros sepia aplicados.

---

**¡Tu sitio va a quedar ÉPICO con el video de fondo!** 🚵‍♂️🎬🏔️