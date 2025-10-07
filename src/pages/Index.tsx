import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    {
      id: '1',
      title: 'Крёстный отец',
      year: 1972,
      rating: 4.8,
      genre: ['Драма', 'Криминал'],
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png'
    },
    {
      id: 2,
      title: 'Криминальное чтиво',
      year: 1994,
      rating: 4.7,
      genre: ['Криминал', 'Драма'],
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png'
    },
    {
      id: 3,
      title: 'Побег из Шоушенка',
      year: 1994,
      rating: 4.9,
      genre: ['Драма'],
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png'
    },
    {
      id: '4',
      title: 'Форрест Гамп',
      year: 1994,
      rating: 4.6,
      genre: ['Драма', 'Комедия'],
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png'
    }
  ];

  const series = [
    {
      id: '5',
      title: 'Во все тяжкие',
      year: 2008,
      rating: 4.9,
      genre: ['Драма', 'Криминал'],
      seasons: 5,
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png'
    },
    {
      id: '6',
      title: 'Игра престолов',
      year: 2011,
      rating: 4.5,
      genre: ['Фэнтези', 'Драма'],
      seasons: 8,
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png'
    },
    {
      id: '7',
      title: 'Друзья',
      year: 1994,
      rating: 4.7,
      genre: ['Комедия'],
      seasons: 10,
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png'
    }
  ];

  const genres = [
    { name: 'Драма', count: 342 },
    { name: 'Комедия', count: 289 },
    { name: 'Боевик', count: 256 },
    { name: 'Триллер', count: 198 },
    { name: 'Фантастика', count: 167 },
    { name: 'Ужасы', count: 134 },
    { name: 'Мелодрама', count: 145 },
    { name: 'Документальный', count: 112 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon name="Film" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                РЕТРО КИНО
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Input
                  type="text"
                  placeholder="Поиск..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <nav className="flex gap-6">
            {['home', 'movies', 'series', 'genres'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'movies' && 'Фильмы'}
                {section === 'series' && 'Сериалы'}
                {section === 'genres' && 'Жанры'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-r from-background via-card to-background border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <h2 className="text-5xl font-bold">Добро пожаловать</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Окунитесь в атмосферу золотого века кино. Классика и современность в одном месте.
                  </p>
                  <Button size="lg" className="mt-4">
                    Начать просмотр
                    <Icon name="Play" size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Film" size={24} />
                Популярные фильмы
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <Card key={movie.id} className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform animate-scale-in" onClick={() => navigate(`/content/${movie.id}`)}>
                    <div className="relative aspect-[2/3] bg-card">
                      <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <Button size="sm" className="w-full">
                          <Icon name="Play" size={16} className="mr-2" />
                          Смотреть
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-lg">{movie.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{movie.year}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="text-primary fill-primary" />
                          <span>{movie.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {movie.genre.map((g) => (
                          <Badge key={g} variant="secondary" className="text-xs">
                            {g}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Tv" size={24} />
                Популярные сериалы
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {series.map((show) => (
                  <Card key={show.id} className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate(`/content/${show.id}`)}>
                    <div className="relative aspect-video bg-card">
                      <img src={show.image} alt={show.title} className="w-full h-full object-cover" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary/90">
                          {show.seasons} сезонов
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-lg">{show.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{show.year}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="text-primary fill-primary" />
                          <span>{show.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {show.genre.map((g) => (
                          <Badge key={g} variant="secondary" className="text-xs">
                            {g}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'movies' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Фильмы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <Card key={movie.id} className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate(`/content/${movie.id}`)}>
                  <div className="relative aspect-[2/3] bg-card">
                    <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-lg">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{movie.year}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="text-primary fill-primary" />
                        <span>{movie.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {movie.genre.map((g) => (
                        <Badge key={g} variant="secondary" className="text-xs">
                          {g}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'series' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Сериалы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {series.map((show) => (
                <Card key={show.id} className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform" onClick={() => navigate(`/content/${show.id}`)}>
                  <div className="relative aspect-video bg-card">
                    <img src={show.image} alt={show.title} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90">
                        {show.seasons} сезонов
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-lg">{show.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{show.year}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="text-primary fill-primary" />
                        <span>{show.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {show.genre.map((g) => (
                        <Badge key={g} variant="secondary" className="text-xs">
                          {g}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'genres' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Жанры</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {genres.map((genre) => (
                <Card
                  key={genre.name}
                  className="p-6 cursor-pointer hover:scale-105 transition-transform hover:bg-primary/10 border-2 hover:border-primary"
                >
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-xl">{genre.name}</h3>
                    <p className="text-muted-foreground text-sm">{genre.count} фильмов</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Film" size={24} className="text-primary" />
              <span className="font-bold text-lg">РЕТРО КИНО</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Ретро Кино. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;