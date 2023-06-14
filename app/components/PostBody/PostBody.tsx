import DynamicSeparator from "./DynamicSeparator/DynamicSeparator";
import Replacement from "./Replacement/Replacement";
import TilesTitle from "./TilesTitle/TilesTitle";
import ToolKit from "./ToolKit/ToolKit";
import style from "./page.module.css";

export default function PostBody() {
  return (
    <section className={style.postBodyContainer}>
      <ToolKit />
      <TilesTitle />
      <DynamicSeparator text="Tank c'est bien plus qu'un outil Rh, c'est bien plus qu'un réseaux social et bien plus qu'une communauté ! Tank c'est vous !" />
      <Replacement />
    </section>
  );
}
