const mapToCSSValues = {
  fontSizes: {
    fontSize16: "16px",
    fontSize18: "18px",
    fontSize20: "20px",
    fontSize22: "22px",
    fontSize28: "28px",
    fontSize48: "48px",
  },
  fontWeight: {
    bold: "bold",
    400: "400",
    500: "500",
    600: "600",
  },
  padding: {
    empty: "0px",
    "10_20": "10px 20px",
    50: "50px",
    "0_50": "0_50px",
    250: "250px",
    "0_180": "0 180px",
    "100px 0 50px 0": "100px 0 50px 0",
  },
  margin: {
    empty: "0px",
    emptyAuto: "0px auto",
    "10px 0 200px 0": "10px 0 200px 0",
    "0 150px 40px 100px": "0 150px 40px 100px",
    "-50_100": "-50px 0 100px 0",
    "150_200_40_100_": "150px 200px 40px 100px",
  },
  marginTop: {
    "-5": "-5px",
  },
  width: {
    675: "675px",
    150: "150px",
    450: "450px",
    80: "80px",
  },
  maxWidth: {
    1350: "1350px",
    675: "675px",
  },
  height: {
    30: "30px",
    750: "750px",
    400: "400px",
    600: "600px",
    800: "800px",
    1000: "1000px",
    200: "200px",
    auto: "auto",
  },
  textAlign: "center",
  display: {
    flex: "flex",
    block: "block",
  },
  letterSpacing: {
    1: "1px",
    1.2: "1.2px",
    5: "5px",
    8: "8px",
  },
  colors: {
    lightBlue: "#3DBEFF",
    white: "#FFF",
    "252e3b": "#252e3b",
    "89888f": "#89888f",
    a6a5a8: "#a6a5a8",
    525355: "#525355",
    "272f3a": "#272f3a",
    ababab: "ababab",
    535355: "#535355",
  },
};

function cssHandler(element, styles) {
  const vals = Object.values(styles);
  const keys = Object.keys(styles);

  for (let i = 0; i < keys.length; i++) {
    element.style[keys[i]] = vals[i];
  }
}
