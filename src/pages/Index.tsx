import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const floorPlans = [
    {
      id: 1,
      name: "Студия",
      area: "35 м²",
      rooms: "1 комната",
      price: "от 8 500 000 ₽",
      image: "/img/2787a760-4968-4703-8074-e2b28e7513fd.jpg"
    },
    {
      id: 2,
      name: "1-комнатная",
      area: "45 м²", 
      rooms: "1 комната",
      price: "от 12 500 000 ₽",
      image: "/img/2787a760-4968-4703-8074-e2b28e7513fd.jpg"
    },
    {
      id: 3,
      name: "2-комнатная",
      area: "65 м²",
      rooms: "2 комнаты", 
      price: "от 18 500 000 ₽",
      image: "/img/2787a760-4968-4703-8074-e2b28e7513fd.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary">SOCHI RESIDENCE</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#plans" className="text-gray-700 hover:text-primary transition-colors">Планировки</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Позвонить</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/07af9003-62b9-4c5b-b365-005722b0f6b4.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
            Панорамные виды<br />
            <span className="text-primary">на море и горы</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Элитный жилой комплекс в самом сердце Сочи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Выбрать квартиру
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Записаться на просмотр
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Преимущества комплекса</h2>
            <p className="text-xl text-gray-600">Все что нужно для комфортной жизни</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Mountain" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Панорамные виды</h3>
              <p className="text-gray-600">Захватывающие виды на Черное море и Кавказские горы из каждой квартиры</p>
            </div>
            
            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Лучшая локация</h3>
              <p className="text-gray-600">В центре Сочи, рядом с набережной и основными достопримечательностями</p>
            </div>
            
            <div className="text-center p-8 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Премиум качество</h3>
              <p className="text-gray-600">Использование лучших материалов и современных технологий строительства</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Планировки квартир</h2>
            <p className="text-xl text-gray-600">Выберите идеальный вариант для себя</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {floorPlans.map((plan) => (
              <Card key={plan.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Home" size={16} />
                      {plan.rooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Square" size={16} />
                      {plan.area}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-4">{plan.price}</div>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-light text-gray-900 mb-6">Современные интерьеры</h2>
              <p className="text-xl text-gray-600 mb-8">
                Каждая квартира спроектирована с вниманием к деталям. 
                Панорамные окна, высокие потолки и премиальная отделка 
                создают атмосферу роскоши и комфорта.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Панорамные окна от пола до потолка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Высота потолков 3.2 метра</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Премиальная отделка и техника</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Просторные террасы с видом на море</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/023be727-3a76-4baa-8839-acfb863e44a8.jpg" 
                alt="Интерьер квартиры"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для получения подробной информации</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-medium mb-6">Офис продаж</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-gray-600">г. Сочи, ул. Курортный проспект, 105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-gray-600">+7 (862) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@sochi-residence.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Время работы</p>
                      <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Записаться на просмотр</h4>
                <p className="text-gray-600 mb-6">
                  Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут
                </p>
                <Button size="lg" className="w-full">
                  Записаться на просмотр
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Map" size={48} className="mx-auto mb-4" />
                  <p>Интерактивная карта</p>
                  <p className="text-sm">г. Сочи, Курортный проспект</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SOCHI RESIDENCE</h3>
              <p className="text-gray-300">
                Элитный жилой комплекс с панорамными видами на море и горы
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#plans" className="hover:text-white transition-colors">Планировки</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (862) 123-45-67</li>
                <li>info@sochi-residence.ru</li>
                <li>г. Сочи, Курортный пр-т, 105</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <Icon name="MapPin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SOCHI RESIDENCE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}