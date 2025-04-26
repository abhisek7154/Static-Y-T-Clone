import VideoCard from "./VideoCard";

const VIDEOS = [
    {
      image: "https://i.ytimg.com/vi/7wtfhZwyrcc/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg",
      title: "Naruto vs Pain AMV - Believer (Imagine Dragons)",
      author: "Anime AMV World",
      views: "12M views",
      timestamp: "2 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/9nLazdA0lcQ/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/9nLazdA0lcQ/hqdefault.jpg",
      title: "Anime Chill Mix - Lofi Hip Hop for Studying",
      author: "Anime Lofi",
      views: "5.7M views",
      timestamp: "1 year ago",
    },
    {
      image: "https://i.ytimg.com/vi/cn3nY5bL2aI/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/cn3nY5bL2aI/hqdefault.jpg",
      title: "Sad Anime Moments - Emotional Soundtrack",
      author: "Anime Feels",
      views: "8.2M views",
      timestamp: "3 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/s7L2PVdrb_8/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/s7L2PVdrb_8/hqdefault.jpg",
      title: "One Piece - Best Fights (Wano Arc)",
      author: "Anime Battles",
      views: "9.1M views",
      timestamp: "8 months ago",
    },
    {
      image: "https://i.ytimg.com/vi/92vuuZt7wak/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/92vuuZt7wak/hqdefault.jpg",
      title: "Tokyo Ghoul - Unravel (Official MV)",
      author: "Anime Music",
      views: "25M views",
      timestamp: "5 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/MYsV7UGV5fI/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/MYsV7UGV5fI/hqdefault.jpg",
      title: "Your Name - Full Soundtrack (Kimi no Na wa)",
      author: "Makoto Shinkai",
      views: "14.3M views",
      timestamp: "6 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/vb3c7gpe0LQ/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/vb3c7gpe0LQ/hqdefault.jpg",
      title: "Top 10 Anime Openings 2023",
      author: "Anime Top 10",
      views: "3.2M views",
      timestamp: "6 months ago",
    },
    {
      image: "https://i.ytimg.com/vi/uw9I75w1v7c/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/uw9I75w1v7c/hqdefault.jpg",
      title: "Attack on Titan - Rumbling (Full Song)",
      author: "AOT Music",
      views: "18.5M views",
      timestamp: "1 year ago",
    },
    {
      image: "https://i.ytimg.com/vi/4GiNQfGjYw0/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/4GiNQfGjYw0/hqdefault.jpg",
      title: "Demon Slayer - Rengoku's Final Battle",
      author: "Anime Moments",
      views: "22M views",
      timestamp: "2 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/9jTo6hTZmiQ/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/9jTo6hTZmiQ/hqdefault.jpg",
      title: "Jujutsu Kaisen - Hollow Purple AMV",
      author: "JJK AMV",
      views: "7.6M views",
      timestamp: "1 year ago",
    },
    {
      image: "https://i.ytimg.com/vi/4OiMOHRDs14/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/4OiMOHRDs14/hqdefault.jpg",
      title: "My Hero Academia - You Say Run (Epic Version)",
      author: "MHA Soundtrack",
      views: "10.2M views",
      timestamp: "3 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/6D9J0aiB5x4/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/6D9J0aiB5x4/hqdefault.jpg",
      title: "Death Note - L's Theme (1 Hour Loop)",
      author: "Anime OST",
      views: "5.9M views",
      timestamp: "4 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/5Z5qYOuc5d4/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/5Z5qYOuc5d4/hqdefault.jpg",
      title: "Studio Ghibli Piano Collection",
      author: "Ghibli Music",
      views: "12.8M views",
      timestamp: "3 years ago",
    },
    {
      image: "https://i.ytimg.com/vi/3jWRrafhO7M/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/3jWRrafhO7M/hqdefault.jpg",
      title: "Chainsaw Man - Kick Back (Full Opening)",
      author: "CSM Music",
      views: "15.4M views",
      timestamp: "1 year ago",
    },
    {
      image: "https://i.ytimg.com/vi/8mP5xOg7ijs/maxresdefault.jpg",
      thumbImage: "https://i.ytimg.com/vi/8mP5xOg7ijs/hqdefault.jpg",
      title: "Sword Art Online - Crossing Field (Full)",
      author: "SAO Music",
      views: "9.7M views",
      timestamp: "7 years ago",
    }
  ];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video, idx) => (
        <div key={idx}>
          <VideoCard
            image={video.image}
            thumbImage={video.thumbImage}
            title={video.title}
            auther={video.auther}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};
