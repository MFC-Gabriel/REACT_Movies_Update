import {BannerStyle} from "./styles";



export function Banner({ title, sub, children, bg }) {
  return (
    
    <BannerStyle bgImage={bg}>
        <h1>{title}</h1>
        <p>{sub}</p>
        {children}
    </BannerStyle>
  );
}
