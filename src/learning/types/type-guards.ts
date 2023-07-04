//
//
//

namespace TypeGuards {
  interface Developer {
    name: string;
    language: string;
  }

  interface Designer {
    name: string;
    tool: string;
  }

  const isDeveloper = (skill: Developer | Designer): skill is Developer => {
    return 'language' in skill;
  };

  const isDesigner = (skill: Developer | Designer): skill is Designer => {
    return 'tool' in skill;
  };

  const developer: Developer = {
    name: 'John',
    language: 'JavaScript',
  };

  const designer: Designer = {
    name: 'Mary',
    tool: 'Figma',
  };

  const printSkill = (skill: Developer | Designer): void => {
    if (isDeveloper(skill)) {
      console.log(skill.name);
    }
    if (isDesigner(skill)) {
      console.log(skill.name);
    }
  };

  printSkill(developer);
  printSkill(designer);
}
