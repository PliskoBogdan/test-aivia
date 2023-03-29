import { shallowMount } from '@vue/test-utils';
import SquareGrid from '@/views/GameView.vue';

describe('GameView.vue', () => {
    it('should renders the correct number of squares based on initial input values', () => {
      const wrapper = shallowMount(SquareGrid);
  
      expect(wrapper.findAll('.square').length).toBe(4096);
    });
  
    it('should toggles square color on mouseover', async () => {
      const wrapper = shallowMount(SquareGrid);
  
      const firstSquare = wrapper.find('.square');
  
      await firstSquare.trigger('mouseover');
      expect(firstSquare.classes()).toContain('blue');
  
      await firstSquare.trigger('mouseout');
      expect(firstSquare.classes()).toContain('white');
    });
  });