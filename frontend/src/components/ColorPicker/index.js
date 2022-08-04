import { Dialog } from "@material-ui/core";
import React, { useState } from "react";

import { GithubPicker } from "react-color";

const ColorPicker = ({ onChange, currentColor, handleClose, open }) => {
  const [selectedColor, setSelectedColor] = useState(currentColor);
  const colors = [
"#000000",
"#1C1C1C",
"#363636",
"#4F4F4F",
"#696969",
"#808080",
"#A9A9A9",
"#C0C0C0",
"#D3D3D3",
"#DCDCDC",
"#6A5ACD",
"#836FFF",
"#6959CD",
"#483D8B",
"#191970",
"#000080",
"#00008B",
"#0000CD",
"#0000FF",
"#6495ED",
"#4169E1",
"#1E90FF",
"#00BFFF",
"#87CEFA",
"#87CEEB",
"#ADD8E6",
"#4682B4",
"#B0C4DE",
"#708090",
"#778899",
"#00FFFF",
"#00CED1",
"#40E0D0",
"#48D1CC",
"#20B2AA",
"#008B8B",
"#008080",
"#7FFFD4",
"#66CDAA",
"#5F9EA0",
"#2F4F4F",
"#00FA9A",
"#00FF7F",
"#98FB98",
"#90EE90",
"#8FBC8F",
"#3CB371",
"#2E8B57",
"#006400",
"#008000",
"#228B22",
"#32CD32",
"#00FF00",
"#7CFC00",
"#7FFF00",
"#ADFF2F",
"#9ACD32",
"6B8E23",
"#556B2F",
"#808000",
"#BDB76B",
"#DAA520",
"#B8860B",
"#8B4513",
"#A0522D",
"#BC8F8F",
"#CD853F",
"#D2691E",
"#F4A460",
"#FFDEAD",
"#F5DEB3",
"#DEB887",
"#D2B48C",
"#7B68EE",
"#9370DB",
"#8A2BE2",
"#4B0082",
"#9400D3",
"#9932CC",
"#BA55D3",
"#A020F0",
"#8B008B",
"#FF00FF",
"#EE82EE",
"#DA70D6",
"#DDA0DD",
"#C71585",
"#FF1493",
"#FF69B4",
"#DB7093",
"#FFB6C1",
"#FFC0CB",
"#F08080",
"#CD5C5C",
"#DC143C",
"#800000",
"#8B0000",
"#B22222",
"#A52A2A",
"#FA8072",
"#E9967A",
"#FFA07A",
"#FF7F50",
"#FF6347",
"#FF0000",
"#FF4500",
"#FF8C00",
"#FFA500",
"#FFD700",
"#FFFF00",
"#F0E68C",
"#F0F8FF",
"#F8F8FF",
"#FFFAFA",
"#FFF5EE",
"#FFFAF0",
"#F5F5F5",
"#F5F5DC",
"#FDF5E6",
"#FFFFF0",
"#FAF0E6",
"#FFF8DC",
"#FAEBD7",
"#FFEBCD",
"#FFE4C4",
"#FFFFE0",
"#FFFACD",
"#FAFAD2",
"#FFEFD5",
"#FFDAB9",
"#FFE4B5",
"#EEE8AA",
"#FFE4E1",
"#FFF0F5",
"#E6E6FA",
"#D8BFD8",
"#F0FFFF",
"#E0FFFF",
"#B0E0E6",
"#E0FFFF",
"#F0FFF0",
"#F5FFFA",

"#B80000",
"#DB3E00",
"#FCCB00",
"#008B02",
"#006B76",
"#1273DE",
"#004DCF",
"#5300EB",
"#EB9694",
"#FAD0C3",
"#FEF3BD",
"#C1E1C5",
"#BEDADC",
"#C4DEF6",
"#BED3F3",
"#D4C4FB",
"#4D4D4D",
"#999999",
"#FFFFFF",
"#F44E3B",
"#FE9200",
"#FCDC00",
"#DBDF00",
"#A4DD00",
"#68CCCA",
"#73D8FF",
"#AEA1FF",
"#FDA1FF",
"#333333",
"#808080",
"#cccccc",
"#D33115",
"#E27300",
"#FCC400",
"#B0BC00",
"#68BC00",
"#16A5A5",
"#009CE0",
"#7B64FF",
"#FA28FF",
"#666666",
"#B3B3B3",
"#9F0500",
"#C45100",
"#FB9E00",
"#808900",
"#194D33",
"#0C797D",
"#0062B1",
"#653294",
"#AB149E",



  ];

  const handleChange = (color) => {
    setSelectedColor(color.hex);
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="xs"
      paperFullWidth
    >
      <GithubPicker
        width={"100%"}
        triangle="hide"
        color={selectedColor}
        colors={colors}
        onChange={handleChange}
        onChangeComplete={(color) => onChange(color.hex)}
      />
    </Dialog>
  );
};

export default ColorPicker;
