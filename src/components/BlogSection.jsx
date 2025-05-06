import blogImg1 from '../assets/blog-img1.webp';
import blogImg2 from '../assets/blog-img2.webp';
import blogImg3 from '../assets/blog-img3.webp';

const blogData = [
  {
    id: 1,
    category: "Uncategorized",
    title: "Advantages and Disadvantages of Bed with Storage Design?",
    description:
      "When it comes to maximizing space in your bedroom, a bed with storage design can be a practical and efficient solution. These beds provide additional...",
    image: blogImg1,
  },
  {
    id: 2,
    category: "Uncategorized",
    title: "Here’s How to Clean Your Wooden Furniture for Deepavali This Year!",
    description:
      "Deepavali, also known as Diwali, is a time of joy and celebration. As you prepare to welcome this auspicious festival, it’s important to ensure that...",
    image: blogImg2,
  },
  {
    id: 3,
    category: "Uncategorized",
    title: "Best 6 ways to Décor your home and give a new fresh look.",
    description:
      "Your home is a reflection of your personality and style. By decorating your living space, you can create an inviting and visually appealing atmosphere that...",
    image: blogImg3,
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#f6f3eb] py-20 px-6">
      <h2 className="text-4xl font-semibold text-center text-[#7c3a23] mb-14">
        What We Think
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-3 right-3 bg-[#7c3a23] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
