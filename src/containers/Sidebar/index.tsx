import Titulo from '../../components/Titulo';
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';

import { Descricao, BotaoTema, SidebarContainer } from './styles';

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matheus Martins</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        MatheusMartinsN1
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
