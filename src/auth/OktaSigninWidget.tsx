import { useEffect, useRef, MutableRefObject } from 'react';
import { oktaConfig } from '../lib/oktaConfig';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

interface OktaSigninWidgetProps {
    onSuccess: (tokens: any) => void;
    onError: (err: Error) => void;
}

export const OktaSigninWidget: React.FC<OktaSigninWidgetProps> = ({ onSuccess, onError }) => {
    const widgetRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {

        if (!widgetRef.current) {
            return;
        }

        const widget = new OktaSignIn(oktaConfig);
        widget.showSignInToGetTokens({
            el: widgetRef.current as unknown as string,
        }).then(onSuccess).catch(onError);

        return () => widget.remove();
    }, [onSuccess, onError]);

    return (
        <div className='container mt-5 mb-5'>
            <div ref={widgetRef}></div>
        </div>
    );
}
