type DefaultPageProps = {
  params?: Record<string | undefined>;
  searchParams?: Record<string | string[], string | undefined>;
};

type PageProps<MainProps = NonNullable<unknown>> = MainProps & DefaultPageProps;
