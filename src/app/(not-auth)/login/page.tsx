'use client';

import ContentContainer from '@/components/custom/ContentContainer';
import LoginSelectorCard from '@/components/login/LoginSelectorCard';

type RegisterPageProps = {};

export default function LoginPage({}: RegisterPageProps) {
  return (
    <ContentContainer>
      <LoginSelectorCard />
    </ContentContainer>
  );
}
