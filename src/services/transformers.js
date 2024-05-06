export function toHtml(code, container) {
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">

        <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
      </head>
      <body class="${container}">
        ${code}
      </body>
    </html>
    `
}

export function toVue(code) {
  const template = `<template>\n${code}</template>`
  const formatted = template
    .split('\n')
    .map((line) => {
      if (line.includes('<template>') || line.includes('</template>')) {
        return line.trim()
      }

      return `  ${line}`
    })
    .join('\n')

  return formatted
}

export function toReact(code) {
  let cloned = code

  cloned = cloned.replace(/class=/g, 'className=')
  cloned = cloned.replace(/for=/g, 'htmlFor=')
  cloned = cloned.replace(/viewBox=/g, 'viewBox=')
  cloned = cloned.replace(/fill-rule=/g, 'fillRule=')
  cloned = cloned.replace(/fill-opacity=/g, 'fillOpacity=')
  cloned = cloned.replace(/clip-rule=/g, 'clipRule=')
  cloned = cloned.replace(/stroke-linecap=/g, 'strokeLinecap=')
  cloned = cloned.replace(/stroke-linejoin=/g, 'strokeLinejoin=')
  cloned = cloned.replace(/stroke-width=/g, 'strokeWidth=')
  cloned = cloned.replace(/stroke-dasharray=/g, 'strokeDasharray=')
  cloned = cloned.replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
  cloned = cloned.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
  cloned = cloned.replace(/stroke-opacity=/g, 'strokeOpacity=')
  cloned = cloned.replace(/tabindex=/g, 'tabIndex=')
  cloned = cloned.replace(/<!--/g, '{/*')
  cloned = cloned.replace(/-->/g, '*/}')

  return cloned
}
