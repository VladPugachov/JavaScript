const getSleepHours = (day) => {  //enter your sleep hours under ich day
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 8;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 8;
      case'friday':
        return 6;
      case 'saturday':
        return 8;
      case 'sunday':
        return 8;
    }
  }
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') 
  + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') 
  + getSleepHours('saturday') + getSleepHours('sunday')
  const getIdealSleepHours = () => {
    let idealHours = 8;  //enter your ideal sleep hours per night
    return idealHours * 7;
  }
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed.');
    } else {
        const sleepDebt = idealSleepHours - actualSleepHours;
      console.log(`You got ${sleepDebt} hour(s) less sleep than you needed this week. Get some rest.`);
    }
  }
  calculateSleepDebt();