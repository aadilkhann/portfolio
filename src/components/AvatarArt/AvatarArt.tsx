interface AvatarArtProps {
  className?: string
}

/**
 * Original abstract portrait illustration used in place of a real photograph.
 * Geometric silhouette on a duotone orange background, echoing the reference
 * layout without reproducing any copyrighted photography.
 */
export default function AvatarArt({ className }: AvatarArtProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 360"
      role="img"
      aria-label="Abstract portrait illustration"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="320" height="360" fill="#e14b1f" />
      <rect width="320" height="360" fill="url(#avatarGrain)" opacity="0.25" />
      <path
        d="M160 50c-34 0-58 26-58 64 0 26 10 44 22 56-30 14-50 38-54 70-2 16 10 30 26 30h128c16 0 28-14 26-30-4-32-24-56-54-70 12-12 22-30 22-56 0-38-24-64-58-64Z"
        fill="#0d0d0d"
      />
      <circle cx="226" cy="96" r="5" fill="#0d0d0d" />
      <defs>
        <pattern id="avatarGrain" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="transparent" />
          <circle cx="1" cy="1" r="1" fill="#000" />
        </pattern>
      </defs>
    </svg>
  )
}
