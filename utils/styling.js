export const DARK = "#424242"
// export const SECTION = "rgb(43, 45, 48)"
export const SECTION = "#fff"
export const WHITE = "rgb(250, 244, 235)"
export const LIGHT_GREY = "#D7D4D4"
export const RED = "rgb(220, 0, 24)"
export const LINK = "#ffdd71"
export const NOTE = "#1C80A0"
export const SUCCESS = "#559C2A"

export const TRANSITION = ".2s linear 0s"

export const FOOTERPRIMARY = "#444"
export const FOOTERSECONDARY = "#363636"
export const BTNWHITE = "rgba(0, 0, 0, .4)"
export const GREY     = "rgba(0, 0, 0, 0.95)"
export const ORANGE   = "#bc9553"
export const GOLD     = "rgb(255, 221, 113)"
export const BLOOD    = "rgb(136, 8, 8)"
export const BORDER   = "#adadad"
export const BACKGROUND   = "#fff"
export const HEADER   = "rgba(255, 255, 255, 0.95)"
export const BORDERPRIM   = "#D7D4D4"
export const LINERGRAD = `linear-gradient(${SECTION}, ${SECTION}) padding-box,linear-gradient(110deg,#50e3c2 0,#0070f3 100%) border-box`
export const LINERGRADBACK = `linear-gradient(155deg,#50e3c2,#0070f3)`

export const ZINDEX = [9999, 999]

export const screens = [500, 900, 900]

export const colours = { DARK, GREY, LIGHT_GREY, ORANGE, LINK, NOTE, SUCCESS }

export const sizes = [24, 20, 18, 16, 14, 13, 12, 28, 36, 50]

export const BTNRADIUS = [5, 10, 16, 20, 50]
export const BORDERRADIUS = [5, 10, 16, 20]

export const kinds = {
  "b": { color: DARK, fontWeight: 600},
  "g": { color: GOLD, fontWeight: 600},
  "w": { color: WHITE, fontWeight: 600},
  "e": { color: WHITE, fontWeight: "normal"},
  "h": { color: DARK, fontWeight: "normal" },
  "s": { color: DARK, fontWeight: "lighter" },
  "v": { color: GREY, fontWeight: "normal" },
  "l": { color: GREY, fontWeight: "lighter" },
  "n": { color: NOTE, fontWeight: "normal" },
  "a": { color: LINK, fontWeight: 600 },
  "o": { color: ORANGE, fontWeight: "normal" },
  // "g": { color: SUCCESS, fontWeight: "normal"},
}

export function textStyle(kind) {
  return {
    // fontFamily: "Roboto",
    fontSize: sizes[kind[1]],
    ...kinds[kind[0]],
  }
}

export function Span({ kind, children, style, ...other }) {
  return <span
    style={{
      ...textStyle(kind),
      ...style
    }}
    {...other}
  >
    {children}
  </span>
}

export function GradientSpan({ gradient, children, gradientFont, normalFont }) {
  const hasGradient = gradient !== undefined && gradient !== null && gradient !== ""

  return <Span
    // kind={hasGradient ? "s2" : "s3"}
    kind={hasGradient ? gradientFont : normalFont}
    style={hasGradient
      ? {
        background: `-webkit-linear-gradient(${gradient})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold",
      } : null
    }
  >
    {children}
  </Span>
}
