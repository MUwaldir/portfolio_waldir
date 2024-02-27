const SkillsList = ({ skills }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105"
          >
            <div className="p-4 flex items-center justify-center">
              <img src={skill.iconUrl} alt={skill.name} className="h-12 w-12" />
            </div>
            <div className="text-center py-2 px-4 bg-gray-100">
              <p className="text-gray-800 font-semibold">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkillsList;
  