from setuptools import setup, find_packages

VERSION = '0.1.0'

setup(
    name="mkdocs-amyy",
    version=VERSION,
    url='https://github.com/amyy54/mkdocs-amyy',
    license='MIT',
    description='Theme for amyy.me and amyy.me/docs',
    author='Amy C',
    author_email='git@amyy.me',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'amyy-theme = amyy_theme',
        ]
    },
    zip_safe=False
)
