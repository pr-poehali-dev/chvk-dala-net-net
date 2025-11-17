import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const classes = [
  'Штурмовик',
  'Додепер',
  'Оператор доставки БПЛА ДОДО',
  'Водитель фургона с мороженым',
  'Капитан Гавс'
];

const classDescriptions = {
  'Штурмовик': 'Передовой боец на острие атаки',
  'Додепер': 'Специалист по пицце под огнём',
  'Оператор доставки БПЛА ДОДО': 'Доставим горячую пиццу даже в траншею',
  'Водитель фургона с мороженым': 'Мороженое поднимает боевой дух',
  'Капитан Гавс': 'Командир с железной выдержкой'
};

export default function Index() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const spinWheel = () => {
    setIsSpinning(true);
    setShowResult(false);
    setSelectedClass(null);

    setTimeout(() => {
      const randomClass = classes[Math.floor(Math.random() * classes.length)];
      setSelectedClass(randomClass);
      setIsSpinning(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b-4 border-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        <div className="absolute top-10 left-10 text-9xl opacity-10">★</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-10">★</div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="mb-8 inline-block border-4 border-primary bg-primary px-8 py-2">
            <h1 className="text-6xl md:text-8xl tracking-wider text-primary-foreground drop-shadow-lg">
              ЧВК ДАЛА НЕТ НЕТ
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground uppercase tracking-wide">
            Родина зовёт! Набор от 15 лет!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-muted text-muted-foreground border-2 border-primary p-4">
              <div className="text-4xl font-bold text-primary">2</div>
              <div className="text-sm uppercase">года на рынке</div>
            </div>
            <div className="bg-muted text-muted-foreground border-2 border-primary p-4">
              <div className="text-4xl font-bold text-primary">25000</div>
              <div className="text-sm uppercase">довольных клиентов</div>
            </div>
            <div className="bg-muted text-muted-foreground border-2 border-primary p-4">
              <div className="text-4xl font-bold text-secondary">🍫</div>
              <div className="text-sm uppercase">выплаты конфетами</div>
            </div>
            <div className="bg-muted text-muted-foreground border-2 border-primary p-4">
              <div className="text-4xl font-bold text-secondary">🍌</div>
              <div className="text-sm uppercase">охрана бананов</div>
            </div>
          </div>
          
          <Button
            onClick={spinWheel}
            disabled={isSpinning}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl px-12 py-8 font-bold uppercase border-4 border-foreground shadow-2xl"
          >
            {isSpinning ? 'Выбираем класс...' : 'Подписать контракт'}
          </Button>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-primary tracking-wider">
            Преимущества службы
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-4 border-primary bg-background p-8 text-center hover:scale-105 transition-transform">
              <Icon name="Package" className="mx-auto mb-4 text-primary" size={64} />
              <h3 className="text-2xl mb-2">Снаряжение</h3>
              <p className="text-muted-foreground">Выдадим всё необходимое для выполнения задач</p>
            </Card>
            
            <Card className="border-4 border-primary bg-background p-8 text-center hover:scale-105 transition-transform">
              <Icon name="Truck" className="mx-auto mb-4 text-primary" size={64} />
              <h3 className="text-2xl mb-2">Новейшая техника</h3>
              <p className="text-muted-foreground">Современное оборудование и транспорт</p>
            </Card>
            
            <Card className="border-4 border-primary bg-background p-8 text-center hover:scale-105 transition-transform">
              <Icon name="Shield" className="mx-auto mb-4 text-primary" size={64} />
              <h3 className="text-2xl mb-2">Крутые командиры</h3>
              <p className="text-muted-foreground">Опытное руководство и поддержка</p>
            </Card>
            
            <Card className="border-4 border-primary bg-background p-8 text-center hover:scale-105 transition-transform">
              <Icon name="Candy" className="mx-auto mb-4 text-primary" size={64} />
              <h3 className="text-2xl mb-2">Выплаты конфетами</h3>
              <p className="text-muted-foreground">Чокопай и за выслугу лет — большой Сникерс</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-primary tracking-wider">
            Классы бойцов
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((className, index) => (
              <Card
                key={index}
                className="border-4 border-primary bg-card p-6 hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <div className="text-6xl mb-4 text-center">★</div>
                <h3 className="text-2xl mb-3 text-center">{className}</h3>
                <p className="text-center text-muted-foreground group-hover:text-primary-foreground">
                  {classDescriptions[className as keyof typeof classDescriptions]}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl mb-8 text-primary tracking-wider">
            Где работаем
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-4 border-primary bg-background p-12">
              <div className="text-8xl mb-6">🌍</div>
              <h3 className="text-4xl mb-4">Африка</h3>
              <p className="text-xl text-muted-foreground">
                Достойная работа по охране перевозки бананов. 
                Тёплый климат, экзотическая природа, незабываемые впечатления!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {showResult && selectedClass && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
          <Card className="border-8 border-primary bg-background p-12 max-w-2xl mx-4 text-center">
            <div className="text-8xl mb-6">★</div>
            <h2 className="text-5xl mb-6 text-primary">Поздравляем!</h2>
            <p className="text-3xl mb-4">Ваш класс:</p>
            <h3 className="text-4xl font-bold mb-6 text-primary uppercase">
              {selectedClass}
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              {classDescriptions[selectedClass as keyof typeof classDescriptions]}
            </p>
            <Button
              onClick={() => setShowResult(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-4 border-4 border-foreground"
            >
              Закрыть
            </Button>
          </Card>
        </div>
      )}

      {isSpinning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <div className="absolute left-1/2 -translate-x-1/2 -top-12 text-6xl z-10">▼</div>
            
            <div className="overflow-hidden border-8 border-primary bg-background rounded-lg">
              <div className="flex animate-slide-tape">
                {[...classes, ...classes, ...classes, ...classes].map((cls, i) => (
                  <div
                    key={i}
                    className="min-w-[300px] h-48 border-4 border-primary bg-card flex flex-col items-center justify-center p-6 shrink-0"
                  >
                    <div className="text-5xl mb-3">★</div>
                    <h3 className="text-xl font-bold text-center text-primary uppercase">
                      {cls}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">★ ★ ★</div>
          <p className="text-2xl font-bold uppercase tracking-wide">
            ЧВК ДАЛА НЕТ НЕТ
          </p>
          <p className="mt-2 text-lg">Служба с 15 лет • Выплаты конфетами • Работа в Африке</p>
        </div>
      </footer>
    </div>
  );
}