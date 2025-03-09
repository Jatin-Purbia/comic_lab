const ComicCards = () => {
    const comicCards = [
      { title: "The Dark Knight", image: "/assets/comic1.jpg" },
      { title: "Naruto", image: "/assets/comic2.jpg" },
      { title: "Cyberpunk Chronicles", image: "/assets/comic3.jpg" },
      { title: "Mythical Legends", image: "/assets/comic4.jpg" },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 pb-16">
        {comicCards.map((comic, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={comic.image} alt={comic.title} className="w-full h-56 object-cover rounded-md" />
            <h3 className="mt-5 text-2xl font-semibold text-blue-500 text-center">{comic.title}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default ComicCards;
  