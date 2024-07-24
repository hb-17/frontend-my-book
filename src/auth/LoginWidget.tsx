import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';
import { SpinnerLoading } from '../layouts/Utils/SpinnerLoading';

interface LoginWidgetProps {
    config: Record<string, any>;
}

export const LoginWidget: React.FC<LoginWidgetProps> = ({ config }) => {
    const { oktaAuth, authState } = useOktaAuth();
    
    const onSuccess = (tokens: any) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err: Error) => {
        console.log('Sign in error', err);
    };

    if (!authState) {
        return <SpinnerLoading />;
    }

    return authState.isAuthenticated ? (
        <Redirect to={{ pathname: '/' }} />
    ) : (
        <div></div>
    );
};

