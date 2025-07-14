import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSection } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ipsa
      dignissimos asperiores in harum corporis quis, ducimus qui exercitationem
      tenetur quod quasi quibusdam nam incidunt velit. Fugit culpa facere
      pariatur.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=matheusmartinsn1&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=matheusmartinsn1&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
);

export default Sobre;
