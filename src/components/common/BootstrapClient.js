'use client';
import React, { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    },[]);

}
