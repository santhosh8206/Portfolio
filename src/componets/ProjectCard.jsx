export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <img src={image} className="h-40 w-full object-cover rounded-xl mb-4" />
      <h4 className="text-2xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View Project
      </a>
    </div>
  );
}
