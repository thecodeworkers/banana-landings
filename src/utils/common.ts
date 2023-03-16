export const scrolling = (reference: any) => {
  if (reference) {
    const target = reference.current;
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }
};

export const scrollTo = (ref: any, offset = 0) => {
  window.scrollTo({ top: ref.offsetTop - offset, behavior: 'smooth' });
};
