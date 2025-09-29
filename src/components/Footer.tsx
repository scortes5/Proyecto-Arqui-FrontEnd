interface Props {}

export const Footer = ({}: Props) => {
  return (
    <footer className="mt-20 py-6 border-t border-white/20 text-center text-white/60 text-sm">
      © {new Date().getFullYear()} G4Market. Todos los derechos reservados.
    </footer>
  );
};
