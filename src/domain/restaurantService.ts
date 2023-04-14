import { Restaurant } from './type';

interface RestaurantService {
  filterByCategory: (
    restaurants: Restaurant[],
    category: string,
  ) => Restaurant[];
  sortByName: (restaurants: Restaurant[]) => Restaurant[];
  sortByDistance: (restaurants: Restaurant[]) => Restaurant[];
  compareByName: (a: Restaurant, b: Restaurant) => number;
}

export const restaurantService: RestaurantService = {
  filterByCategory(restaurants, category) {
    if (category === '전체') return restaurants;

    return restaurants.filter((restaurant) => restaurant.category === category);
  },

  sortByName(restaurants) {
    return [...restaurants].sort(this.compareByName);
  },

  sortByDistance(restaurants) {
    return [...restaurants].sort((a: Restaurant, b: Restaurant) => {
      if (a.distance === b.distance) {
        return this.compareByName(a, b);
      }

      return a.distance - b.distance;
    });
  },

  compareByName(a: Restaurant, b: Restaurant) {
    return a.name.localeCompare(b.name);
  },
};
