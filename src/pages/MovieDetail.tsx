import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allContent = [
    {
      id: '1',
      title: 'Крёстный отец',
      year: 1972,
      rating: 4.8,
      genre: ['Драма', 'Криминал'],
      duration: '2ч 55м',
      director: 'Фрэнсис Форд Коппола',
      cast: ['Марлон Брандо', 'Аль Пачино', 'Джеймс Каан'],
      description: 'Криминальная сага о семье Корлеоне, охватывающая период 1945-1955 годов. История восхождения к власти Майкла Корлеоне, младшего сына главы мафиозной семьи.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'movie'
    },
    {
      id: '2',
      title: 'Криминальное чтиво',
      year: 1994,
      rating: 4.7,
      genre: ['Криминал', 'Драма'],
      duration: '2ч 34м',
      director: 'Квентин Тарантино',
      cast: ['Джон Траволта', 'Сэмюэл Л. Джексон', 'Ума Турман'],
      description: 'Переплетенные истории двух гангстеров, жены босса мафии и боксера, которые сталкиваются в неожиданных обстоятельствах.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'movie'
    },
    {
      id: '3',
      title: 'Побег из Шоушенка',
      year: 1994,
      rating: 4.9,
      genre: ['Драма'],
      duration: '2ч 22м',
      director: 'Фрэнк Дарабонт',
      cast: ['Тим Роббинс', 'Морган Фриман'],
      description: 'История банкира Энди Дюфрейна, несправедливо осужденного за убийство жены и её любовника. В тюрьме он находит друга и надежду на свободу.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'movie'
    },
    {
      id: '4',
      title: 'Форрест Гамп',
      year: 1994,
      rating: 4.6,
      genre: ['Драма', 'Комедия'],
      duration: '2ч 22м',
      director: 'Роберт Земекис',
      cast: ['Том Хэнкс', 'Робин Райт', 'Гэри Синиз'],
      description: 'История жизни простодушного человека с большим сердцем, который стал свидетелем и участником ключевых событий американской истории.',
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
      director: 'Винс Гиллиган',
      cast: ['Брайан Крэнстон', 'Аарон Пол', 'Анна Ганн'],
      description: 'Учитель химии, узнав о смертельной болезни, начинает производить метамфетамин, чтобы обеспечить будущее своей семьи.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'series'
    },
    {
      id: '6',
      title: 'Игра престолов',
      year: 2011,
      rating: 4.5,
      genre: ['Фэнтези', 'Драма'],
      seasons: 8,
      director: 'Дэвид Бениофф, Д. Б. Уайсс',
      cast: ['Эмилия Кларк', 'Кит Харингтон', 'Питер Динклэйдж'],
      description: 'Эпическая сага о борьбе за власть между знатными семьями Вестероса, пока древняя угроза возвращается с севера.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'series'
    },
    {
      id: '7',
      title: 'Друзья',
      year: 1994,
      rating: 4.7,
      genre: ['Комедия'],
      seasons: 10,
      director: 'Дэвид Крейн, Марта Кауфман',
      cast: ['Дженнифер Энистон', 'Кортни Кокс', 'Лиза Кудроу'],
      description: 'Повседневная жизнь шести друзей, живущих в Нью-Йорке, их романтические отношения, карьера и бесконечные приключения.',
      image: 'https://v3b.fal.media/files/b/monkey/Hs4xN1gVcI6oOtA2BaUED_output.png',
      type: 'series'
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
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card className="overflow-hidden sticky top-24">
              <div className="relative aspect-[2/3] bg-card">
                <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-3">
                <Button className="w-full" size="lg" onClick={() => navigate(`/watch/${id}`)}>
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть
                </Button>
                <div className="grid grid-cols-2 gap-2">
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
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={18} />
                  <span>{content.year}</span>
                </div>
                {content.duration && (
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} />
                    <span>{content.duration}</span>
                  </div>
                )}
                {content.seasons && (
                  <div className="flex items-center gap-2">
                    <Icon name="Tv" size={18} />
                    <span>{content.seasons} сезонов</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={18} className="text-primary fill-primary" />
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

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3">Описание</h2>
              <p className="text-muted-foreground leading-relaxed">
                {content.description}
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Информация</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Clapperboard" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Режиссёр</p>
                    <p className="font-medium">{content.director}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">В ролях</p>
                    <p className="font-medium">{content.cast.join(', ')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {relatedContent.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Похожее</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedContent.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => navigate(`/content/${item.id}`)}
                >
                  <div className="relative aspect-video bg-card">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{item.year}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="text-primary fill-primary" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default MovieDetail;