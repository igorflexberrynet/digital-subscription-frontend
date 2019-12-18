import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import PricePeriodEnum from '../enums/new-platform-digital-subscription-price-period';

export default FlexberryEnum.extend({
  enum: PricePeriodEnum,
  sourceType: 'NewPlatform.DigitalSubscription.PricePeriod'
});
