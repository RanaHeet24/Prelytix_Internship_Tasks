function SkillBadge({ name, level }) {
  return (
    <div className="hr-skill-card">
      <h3>{name}</h3>
      <p>
        Level: {level}
        {level >= 90 && " 🔥"}
      </p>
    </div>
  );
}

export default SkillBadge;
