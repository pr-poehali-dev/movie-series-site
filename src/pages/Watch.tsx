import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import VideoPlayer from '@/components/VideoPlayer';

const Watch = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const allContent = [
    {
      id: '1',
      title: 'Крёстный отец',
      year: 1972,
      rating: 4.8,
      genre: ['Драма', 'Криминал'],
      description: 'Криминальная сага о семье Корлеоне, охватывающая период 1945-1955 годов.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'movie'
    },
    {
      id: '2',
      title: 'Криминальное чтиво',
      year: 1994,
      rating: 4.7,
      genre: ['Криминал', 'Драма'],
      description: 'Переплетенные истории двух гангстеров, жены босса мафии и боксера.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'movie'
    },
    {
      id: '3',
      title: 'Побег из Шоушенка',
      year: 1994,
      rating: 4.9,
      genre: ['Драма'],
      description: 'История банкира Энди Дюфрейна, несправедливо осужденного за убийство.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'movie'
    },
    {
      id: '4',
      title: 'Форрест Гамп',
      year: 1994,
      rating: 4.6,
      genre: ['Драма', 'Комедия'],
      description: 'История жизни простодушного человека с большим сердцем.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'movie'
    },
    {
      id: '5',
      title: 'Во все тяжкие',
      year: 2008,
      rating: 4.9,
      genre: ['Драма', 'Криминал'],
      seasons: 5,
      description: 'Учитель химии начинает производить метамфетамин.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'series',
      episodesPerSeason: [7, 13, 13, 13, 16]
    },
    {
      id: '6',
      title: 'Игра престолов',
      year: 2011,
      rating: 4.5,
      genre: ['Фэнтези', 'Драма'],
      seasons: 8,
      description: 'Эпическая сага о борьбе за власть между знатными семьями.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'series',
      episodesPerSeason: [10, 10, 10, 10, 10, 10, 7, 6]
    },
    {
      id: '7',
      title: 'Друзья',
      year: 1994,
      rating: 4.7,
      genre: ['Комедия'],
      seasons: 10,
      description: 'Повседневная жизнь шести друзей, живущих в Нью-Йорке.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'series',
      episodesPerSeason: [24, 24, 25, 24, 24, 25, 24, 24, 24, 18]
    }
  ];

  const content = allContent.find(item => item.id === id);

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Контент не найден</h2>
          <Button onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  const relatedContent = allContent
    .filter(item => item.id !== id && item.genre.some(g => content.genre.includes(g)))
    .slice(0, 4);

  const isSeries = content.type === 'series' && 'episodesPerSeason' in content;
  
  const generateEpisodes = (seasonNum: number, episodeCount: number) => {
    return Array.from({ length: episodeCount }, (_, i) => ({
      number: i + 1,
      title: `Эпизод ${i + 1}`,
      duration: '45 мин'
    }));
  };

  const currentEpisodeTitle = isSeries 
    ? `Сезон ${selectedSeason}, Эпизод ${selectedEpisode}` 
    : content.title;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(`/content/${id}`)}>
              <Icon name="ArrowLeft" size={24} />
            </Button>
            <div className="flex items-center gap-2">
              <Icon name="Film" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                РЕТРО КИНО
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-6xl mx-auto space-y-8">
          <VideoPlayer title={currentEpisodeTitle} />

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{content.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    <span>{content.year}</span>
                  </div>
                  {'seasons' in content && (
                    <div className="flex items-center gap-2">
                      <Icon name="Tv" size={16} />
                      <span>{content.seasons} сезонов</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={16} className="text-primary fill-primary" />
                    <span className="text-foreground font-bold">{content.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.genre.map((g) => (
                    <Badge key={g} variant="secondary">
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Plus" size={16} className="mr-2" />
                  В список
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Лайк
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {content.description}
              </p>
            </Card>

            {isSeries && content.episodesPerSeason && (
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Эпизоды</h2>
                <Tabs value={selectedSeason.toString()} onValueChange={(v) => setSelectedSeason(Number(v))}>
                  <TabsList className="mb-4">
                    {Array.from({ length: content.seasons }, (_, i) => (
                      <TabsTrigger key={i + 1} value={(i + 1).toString()}>
                        Сезон {i + 1}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {Array.from({ length: content.seasons }, (_, seasonIndex) => {
                    const seasonNum = seasonIndex + 1;
                    const episodeCount = content.episodesPerSeason[seasonIndex];
                    const episodes = generateEpisodes(seasonNum, episodeCount);
                    
                    return (
                      <TabsContent key={seasonNum} value={seasonNum.toString()}>
                        <ScrollArea className="h-[400px] pr-4">
                          <div className="space-y-2">
                            {episodes.map((episode) => (
                              <div
                                key={episode.number}
                                onClick={() => {
                                  setSelectedSeason(seasonNum);
                                  setSelectedEpisode(episode.number);
                                }}
                                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-colors ${
                                  selectedSeason === seasonNum && selectedEpisode === episode.number
                                    ? 'bg-primary/20 border-2 border-primary'
                                    : 'bg-muted hover:bg-muted/80'
                                }`}
                              >
                                <div className="flex-shrink-0 w-16 h-16 bg-card rounded flex items-center justify-center">
                                  <Icon 
                                    name={selectedSeason === seasonNum && selectedEpisode === episode.number ? 'Play' : 'Circle'} 
                                    size={24} 
                                    className="text-primary"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold">{episode.title}</h4>
                                  <p className="text-sm text-muted-foreground">{episode.duration}</p>
                                </div>
                                <Badge variant="outline">{episode.number}</Badge>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </Card>
            )}
          </div>

          {relatedContent.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Похожее</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedContent.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => navigate(`/content/${item.id}`)}
                  >
                    <div className="relative aspect-video bg-card">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 space-y-1">
                      <h3 className="font-bold text-sm line-clamp-1">{item.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{item.year}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={12} className="text-primary fill-primary" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Watch;