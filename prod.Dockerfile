FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  # Allow install without lockfile, so example works even without Node.js installed locally
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY tailwind.config.js . 
COPY postcss.config.js .
COPY . .

WORKDIR /app/src/prisma

RUN npx prisma generate

WORKDIR /app

# Environment variables must be present at build time
ARG PGUSER
ENV PGUSER=${PGUSER}
ARG PGPASSWORD
ENV PGPASSWORD=${PGPASSWORD}
ARG PGDATABASE
ENV PGDATABASE=${PGDATABASE}
ARG PGPORT
ENV PGPORT=${PGPORT}
ARG PGHOST
ENV PGHOST=${PGHOST}
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ARG REDIS_URL
ENV REDIS_URL=${REDIS_URL}
ARG RABBITMQ_URL
ENV RABBITMQ_URL=${RABBITMQ_URL}
ARG RABBITMQ_DEFAULT_PASS
ENV RABBITMQ_DEFAULT_PASS=${RABBITMQ_DEFAULT_PASS}
ARG RABBITMQ_DEFAULT_USER
ENV RABBITMQ_DEFAULT_USER=${RABBITMQ_DEFAULT_USER}
ARG RABBITMQ_DEFAULT_VHOST
ENV RABBITMQ_DEFAULT_VHOST=${RABBITMQ_DEFAULT_VHOST}
ARG CHAT_GPT_SECRET_KEY
ENV CHAT_GPT_SECRET_KEY=${CHAT_GPT_SECRET_KEY}
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=${GITHUB_TOKEN}

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi


# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG PGUSER
ENV PGUSER=${PGUSER}
ARG PGPASSWORD
ENV PGPASSWORD=${PGPASSWORD}
ARG PGDATABASE
ENV PGDATABASE=${PGDATABASE}
ARG PGPORT
ENV PGPORT=${PGPORT}
ARG PGHOST
ENV PGHOST=${PGHOST}
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ARG REDIS_URL
ENV REDIS_URL=${REDIS_URL}
ARG RABBITMQ_URL
ENV RABBITMQ_URL=${RABBITMQ_URL}
ARG RABBITMQ_DEFAULT_PASS
ENV RABBITMQ_DEFAULT_PASS=${RABBITMQ_DEFAULT_PASS}
ARG RABBITMQ_DEFAULT_USER
ENV RABBITMQ_DEFAULT_USER=${RABBITMQ_DEFAULT_USER}
ARG RABBITMQ_DEFAULT_VHOST
ENV RABBITMQ_DEFAULT_VHOST=${RABBITMQ_DEFAULT_VHOST}
ARG CHAT_GPT_SECRET_KEY
ENV CHAT_GPT_SECRET_KEY=${CHAT_GPT_SECRET_KEY}
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=${GITHUB_TOKEN}

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]