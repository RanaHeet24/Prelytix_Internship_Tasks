import SkillBadge from "./SkillBadge";

function SkillList({ skills }) {
  return (
    <div className="hr-skill-list">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <SkillBadge
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
}

export default SkillList;
