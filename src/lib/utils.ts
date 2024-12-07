export const pathJoin = (path: string, subPath: string) => {
  return (
    '/' +
    path
      .split('/')
      .concat(subPath.split('/'))
      .filter((p) => p)
      .join('/')
  )
}

export const getAllLanguages = () => {
  return ["en", "ja"];
}
