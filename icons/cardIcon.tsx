import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export default function CardIcon() {
  return (
    <Svg width="25" height="25" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_980_8550)">
        <Path
          d="M15 4.16666H5C3.61929 4.16666 2.5 5.28594 2.5 6.66666V13.3333C2.5 14.714 3.61929 15.8333 5 15.8333H15C16.3807 15.8333 17.5 14.714 17.5 13.3333V6.66666C17.5 5.28594 16.3807 4.16666 15 4.16666Z"
          stroke="#FFBA55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.5 8.33334H17.5"
          stroke="#FFBA55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.83325 12.5H5.84159"
          stroke="#FFBA55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.16675 12.5H10.8334"
          stroke="#FFBA55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_980_8550">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
