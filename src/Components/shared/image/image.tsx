import * as React from 'react'

interface IImage {
  src: string
  className?: string
}
class Header extends React.Component<IImage, any> {
  private breakSrc(src: string): { file?: string; extension?: string } {
    const pattern = /(.+)\.([^.]+)$/

    const brokenSrc = pattern.exec(src)

    if (!brokenSrc || brokenSrc.length <= 1) {
      throw new Error(`Invalid image: ${src}`)
    }

    return {
      file: brokenSrc[1],
      extension: brokenSrc[2],
    }
  }

  render() {
    const { src, className } = this.props
    const { file, extension } = this.breakSrc(src)

    return (
      <img
        srcSet={`
          images/${file}.${extension},
          images/${file}@2x.${extension} 2x,
          images/${file}@3x.${extension} 3x
        `}
        src={`images/${file}.${extension}`}
        className={className}
      />
    )
  }
}

export default Header
