import { PROJECTS } from "../DATA/HomeTwoData/OURPROJECTS"

export const handleFilterProject = (category: string) => {
    if (category === 'All projects') {
        return PROJECTS;
    }
    return PROJECTS.filter((x) => x.category.split(', ').includes(category));
};
  