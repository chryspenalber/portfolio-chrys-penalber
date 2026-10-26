import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SkillCard from '../../components/SkillCard/SkillCard';
import skills from '../../data/skills';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section id="habilidades">
      <SectionTitle numero="03" rotulo="habilidades" titulo="O que sei usar" />

      <div className={styles.grade}>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.id}
            numero={String(index + 1).padStart(2, '0')}
            {...skill}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
