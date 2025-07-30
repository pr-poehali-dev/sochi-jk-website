import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const floorPlans = [
    {
      id: 1,
      name: "Студия-Пентхаус",
      area: "65 м²",
      rooms: "1 комната",
      price: "от 25 000 000 ₽",
      image: "/img/2787a760-4968-4703-8074-e2b28e7513fd.jpg"
    },
    {
      id: 2,
      name: "Апартаменты Премиум",
      area: "85 м²", 
      rooms: "2 комнаты",
      price: "от 35 000 000 ₽",
      image: "/img/2787a760-4968-4703-8074-e2b28e7513fd.jpg"
    },
    {
      id: 3,
      name: "Резиденция Люкс",
      area: "120 м²",
      rooms: "3 комнаты", 
      price: "от 55 000 000 ₽",
      image: "/img/2787a760-4968-4703-8074-e2b28e7513fd.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-md shadow-2xl border-b border-primary/20 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-serif text-3xl font-bold gold-gradient">SOCHI RÉSIDENCE</div>
            <nav className="hidden md:flex space-x-12">
              <a href="#home" className="text-white/80 hover:text-primary transition-all duration-300 font-medium tracking-wide">Главная</a>
              <a href="#plans" className="text-white/80 hover:text-primary transition-all duration-300 font-medium tracking-wide">Планировки</a>
              <a href="#contact" className="text-white/80 hover:text-primary transition-all duration-300 font-medium tracking-wide">Контакты</a>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-yellow-500 text-black font-semibold px-8 py-3 rounded-none hover:shadow-2xl transition-all duration-300">Позвонить</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/07af9003-62b9-4c5b-b365-005722b0f6b4.jpg')`
          }}
        >
          <div className="absolute inset-0 luxury-gradient opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 border border-primary/30 rounded-full mb-8">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Класс Люкс</span>
            </div>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-light mb-8 animate-fade-in leading-tight">
            Панорамные виды<br />
            <span className="gold-gradient">на море и горы</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
            Элитный жилой комплекс класса люкс в самом престижном районе Сочи
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-yellow-500 text-black font-semibold text-lg px-12 py-6 rounded-none hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              Выбрать апартаменты
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold text-lg px-12 py-6 rounded-none transition-all duration-500">
              Частный показ
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-primary/30 rounded-full mb-8">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Эксклюзивные преимущества</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">Элитная <span className="gold-gradient">резиденция</span></h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">Каждая деталь создана для истинных ценителей роскоши и комфорта</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-12 bg-black/30 backdrop-blur-lg luxury-shadow hover:bg-black/40 transition-all duration-500 group">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Mountain" size={40} className="text-black" />
              </div>
              <h3 className="font-serif text-3xl font-medium mb-6 text-white">Панорамные виды</h3>
              <p className="text-white/70 text-lg leading-relaxed">Захватывающие 360° виды на Черное море и величественные Кавказские горы из каждых апартаментов</p>
            </div>
            
            <div className="text-center p-12 bg-black/30 backdrop-blur-lg luxury-shadow hover:bg-black/40 transition-all duration-500 group">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="MapPin" size={40} className="text-black" />
              </div>
              <h3 className="font-serif text-3xl font-medium mb-6 text-white">Премиальная локация</h3>
              <p className="text-white/70 text-lg leading-relaxed">В самом престижном районе Сочи, в окружении элитной инфраструктуры и культурных достопримечательностей</p>
            </div>
            
            <div className="text-center p-12 bg-black/30 backdrop-blur-lg luxury-shadow hover:bg-black/40 transition-all duration-500 group">
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="Crown" size={40} className="text-black" />
              </div>
              <h3 className="font-serif text-3xl font-medium mb-6 text-white">Исключительное качество</h3>
              <p className="text-white/70 text-lg leading-relaxed">Итальянский мрамор, немецкая сантехника, швейцарские окна — только лучшие материалы мира</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="plans" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-primary/30 rounded-full mb-8">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Эксклюзивные апартаменты</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">Роскошные <span className="gold-gradient">резиденции</span></h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">Каждая планировка — произведение архитектурного искусства</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {floorPlans.map((plan) => (
              <Card key={plan.id} className="overflow-hidden bg-black/50 backdrop-blur-lg luxury-shadow hover:bg-black/70 transition-all duration-500 border border-primary/20 group">
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-serif text-3xl font-medium mb-4 text-white">{plan.name}</h3>
                  <div className="flex items-center gap-6 text-white/70 mb-6">
                    <span className="flex items-center gap-2">
                      <Icon name="Home" size={20} className="text-primary" />
                      {plan.rooms}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon name="Square" size={20} className="text-primary" />
                      {plan.area}
                    </span>
                  </div>
                  <div className="text-3xl font-bold gold-gradient mb-6">{plan.price}</div>
                  <Button className="w-full bg-gradient-to-r from-primary to-yellow-500 text-black font-semibold py-4 rounded-none hover:shadow-xl transition-all duration-300">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-32 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-6 py-2 border border-primary/30 rounded-full mb-8">
                <span className="text-primary font-medium tracking-wider text-sm uppercase">Интерьеры премиум-класса</span>
              </div>
              <h2 className="font-serif text-5xl font-light text-white mb-8">Изысканное <span className="gold-gradient">мастерство</span></h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Каждые апартаменты — это симфония роскоши и элегантности. 
                Панорамные окна, высокие потолки и эксклюзивная отделка 
                создают неповторимую атмосферу аристократического комфорта.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white text-lg">Панорамные окна от пола до потолка</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white text-lg">Высота потолков до 4.2 метра</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white text-lg">Эксклюзивная отделка от ведущих дизайнеров</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white text-lg">Приватные террасы с бескрайними видами</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative luxury-shadow">
                <img 
                  src="/img/023be727-3a76-4baa-8839-acfb863e44a8.jpg" 
                  alt="Интерьер апартаментов"
                  className="w-full h-auto rounded-none"
                />
                <div className="absolute inset-0 border-2 border-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 border border-primary/30 rounded-full mb-8">
              <span className="text-primary font-medium tracking-wider text-sm uppercase">Эксклюзивные консультации</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">Персональный <span className="gold-gradient">сервис</span></h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">Наши эксперты готовы предоставить индивидуальную консультацию</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12 animate-fade-in">
              <div className="bg-black/50 backdrop-blur-lg luxury-shadow p-12 border border-primary/20">
                <h3 className="font-serif text-3xl font-medium mb-8 text-white">Центр продаж</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg mb-2">Адрес</p>
                      <p className="text-white/70 text-lg">г. Сочи, ул. Курортный проспект, 105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg mb-2">Телефон</p>
                      <p className="text-white/70 text-lg">+7 (862) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg mb-2">Email</p>
                      <p className="text-white/70 text-lg">concierge@sochi-residence.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg mb-2">Время работы</p>
                      <p className="text-white/70 text-lg">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-yellow-500/10 backdrop-blur-lg luxury-shadow p-12 border border-primary/30">
                <h4 className="font-serif text-2xl font-medium mb-6 text-white">Эксклюзивный показ</h4>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Оставьте заявку и наш персональный консьерж организует 
                  приватную презентацию в удобное для вас время
                </p>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-yellow-500 text-black font-semibold py-6 rounded-none hover:shadow-2xl transition-all duration-300">
                  Записаться на показ
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-black/50 backdrop-blur-lg luxury-shadow h-full border border-primary/20 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center">
                    <Icon name="Map" size={48} className="text-black" />
                  </div>
                  <p className="text-2xl font-medium mb-4">Интерактивная карта</p>
                  <p className="text-lg">г. Сочи, Курортный проспект</p>
                  <p className="text-sm text-white/40 mt-4">Премиальная локация в центре города</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-20 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-serif text-4xl font-bold mb-6 gold-gradient">SOCHI RÉSIDENCE</h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Элитный жилой комплекс класса люкс с панорамными видами на море и горы. 
                Где роскошь встречается с изысканностью.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-6 text-white">Навигация</h4>
              <ul className="space-y-4 text-white/70">
                <li><a href="#home" className="hover:text-primary transition-colors duration-300">Главная</a></li>
                <li><a href="#plans" className="hover:text-primary transition-colors duration-300">Апартаменты</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-6 text-white">Контакты</h4>
              <ul className="space-y-4 text-white/70">
                <li>+7 (862) 123-45-67</li>
                <li>concierge@sochi-residence.ru</li>
                <li>г. Сочи, Курортный пр-т, 105</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary/20 mt-16 pt-8 text-center text-white/50">
            <p>&copy; 2024 SOCHI RÉSIDENCE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}