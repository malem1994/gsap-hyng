import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Đăng ký plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function initScrollSmoother() {
  // Kiểm tra môi trường (tránh lỗi SSR)
  if (typeof window !== 'undefined') {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5, // Thời gian smooth (giây)
      effects: true, // Bật hiệu ứng
      normalizeScroll: true, // Chuẩn hóa scroll trên mobile
    });
  }
}
