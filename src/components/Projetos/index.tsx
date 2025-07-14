import Paragrafo from '../Paragrafo';
import Titulo from '../Titulo';
import { Card, LinkBotao } from './styles';

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sint
      cum facilis quidem! Ea, libero nostrum. Maxime ex mollitia doloremque vero
      harum obcaecati inventore iusto assumenda. Doloribus facere tenetur illo.
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
);

export default Projeto;
