export default function DrawerProject({ project }) {
  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Tech:</strong> {project.stack}</p>
    </>
  );
}
