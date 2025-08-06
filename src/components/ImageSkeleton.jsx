import { motion } from "framer-motion";

const ImageSkeleton = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Blur placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted/30" />
      
      {/* Loading icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default ImageSkeleton;