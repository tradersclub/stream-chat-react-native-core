import openLink from '@utils/openLink';

export const openUrlSafely = async (url?: string) => {
  let finalUrl = url as string;
  const pattern = new RegExp(/^\S+:\/\//);

  if (!pattern.test(finalUrl)) {
    finalUrl = 'http://' + url;
  }
  openLink(finalUrl);
};
