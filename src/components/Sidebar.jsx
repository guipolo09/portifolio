import Avatar from "../images/foto-perfil.png";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Martins Polo" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://wa.me/5514935007435" className="btn">
        Whatsapp
      </a>
    </aside>
  );
};

export default Sidebar;
