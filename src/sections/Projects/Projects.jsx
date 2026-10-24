import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/projects';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projetos">
      <SectionTitle numero="02" rotulo="projetos" titulo="O que desenvolvi" />

      <p className={styles.intro}>
        Projetos criados durante a formação em Engenharia Front-End da EBAC, do
        primeiro layout em HTML e CSS até aplicações com React e Next.js.
      </p>

      <div  className={styles.grade}>
        {projects.map((projeto) => (
          <ProjectCard key={projeto.id} {...projeto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
